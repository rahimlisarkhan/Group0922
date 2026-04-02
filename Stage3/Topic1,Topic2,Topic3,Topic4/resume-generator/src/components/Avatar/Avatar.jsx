import { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Avatar.module.css';

const PRESET_COLORS = [
  '#1677ff', '#52c41a', '#faad14', '#ff4d4f',
  '#722ed1', '#13c2c2', '#eb2f96', '#fa8c16',
];

function getColorFromString(str) {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  return PRESET_COLORS[Math.abs(hash) % PRESET_COLORS.length];
}

// ─── Avatar ───────────────────────────────────────────────────────────────────

function Avatar({
  src = undefined,
  alt = 'avatar',
  size = 'md',
  shape = 'circle',
  initials = '',
  icon = null,
  color = undefined,
  status = undefined,
  onClick = undefined,
  style = undefined,
  className = '',
  ...rest
}) {
  const [imgError, setImgError] = useState(false);

  const isCustomSize = typeof size === 'number';
  const sizeClass = isCustomSize ? '' : styles[size];
  const bgColor = color ?? (initials ? getColorFromString(initials) : '#1677ff');

  const inlineStyle = {
    ...(isCustomSize
      ? {
          width: size,
          height: size,
          fontSize: Math.round(size * 0.35),
        }
      : {}),
    ...((!src || imgError) && initials ? { backgroundColor: bgColor } : {}),
    ...style,
  };

  const classes = [
    styles.avatar,
    styles[shape],
    sizeClass,
    onClick ? styles.clickable : '',
    className || '',
  ]
    .filter(Boolean)
    .join(' ');

  const renderContent = () => {
    if (src && !imgError) {
      return (
        <img
          src={src}
          alt={alt}
          className={styles.img}
          onError={() => setImgError(true)}
        />
      );
    }
    if (initials) {
      return <span aria-label={alt}>{initials.slice(0, 2).toUpperCase()}</span>;
    }
    if (icon) {
      return <span aria-label={alt}>{icon}</span>;
    }
    return <span aria-label={alt}>?</span>;
  };

  return (
    <span
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
      className={classes}
      style={inlineStyle}
      onClick={onClick}
      onKeyDown={onClick ? (e) => e.key === 'Enter' && onClick(e) : undefined}
      {...rest}
    >
      {renderContent()}
      {status && (
        <span className={`${styles.statusBadge} ${styles[status]}`} aria-label={status} />
      )}
    </span>
  );
}

Avatar.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    PropTypes.number,
  ]),
  shape: PropTypes.oneOf(['circle', 'square']),
  initials: PropTypes.string,
  icon: PropTypes.node,
  color: PropTypes.string,
  status: PropTypes.oneOf(['online', 'offline', 'busy', 'away']),
  onClick: PropTypes.func,
  style: PropTypes.object,
  className: PropTypes.string,
};

// ─── Avatar.Group ─────────────────────────────────────────────────────────────

function AvatarGroup({
  children,
  max = undefined,
  size = 'md',
  shape = 'circle',
}) {
  const childArray = Array.isArray(children) ? children : [children];
  const visible = max ? childArray.slice(0, max) : childArray;
  const overflow = max ? childArray.length - max : 0;

  return (
    <div className={styles.group}>
      {visible.map((child, i) =>
        child
          ? { ...child, key: i, props: { ...child.props, size: child.props.size ?? size, shape: child.props.shape ?? shape } }
          : null
      )}
      {overflow > 0 && (
        <Avatar
          size={size}
          shape={shape}
          initials={`+${overflow}`}
          color="#f5f5f5"
          className={styles.overflow}
          style={{ color: '#666', backgroundColor: '#f5f5f5' }}
        />
      )}
    </div>
  );
}

AvatarGroup.propTypes = {
  children: PropTypes.node.isRequired,
  max: PropTypes.number,
  size: PropTypes.oneOfType([
    PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
    PropTypes.number,
  ]),
  shape: PropTypes.oneOf(['circle', 'square']),
};

Avatar.Group = AvatarGroup;

export default Avatar;
