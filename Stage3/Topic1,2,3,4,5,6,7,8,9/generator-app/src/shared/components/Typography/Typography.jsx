import PropTypes from 'prop-types';
import styles from './Typography.module.css';

const TITLE_TAGS = { 1: 'h1', 2: 'h2', 3: 'h3', 4: 'h4', 5: 'h5', 6: 'h6' };

function buildClasses(base, { type, strong, italic, underline, del, mark, code, disabled, ellipsis }) {
  return [
    styles[base],
    styles.base,
    type ? styles[type] : styles.default,
    strong ? styles.strong : '',
    italic ? styles.italic : '',
    underline ? styles.underline : '',
    del ? styles.del : '',
    mark ? styles.mark : '',
    code ? styles.code : '',
    disabled ? styles.disabled : '',
    ellipsis ? styles.ellipsis : '',
  ]
    .filter(Boolean)
    .join(' ');
}

// ─── Title ────────────────────────────────────────────────────────────────────

function Title({
  level = 1,
  type = 'default',
  strong = false,
  italic = false,
  underline = false,
  del: isDelete = false,
  disabled = false,
  ellipsis = false,
  children = null,
  className = '',
  ...rest
}) {
  const Tag = TITLE_TAGS[level] ?? 'h1';
  const cls = buildClasses(`h${level}`, { type, strong, italic, underline, del: isDelete, disabled, ellipsis });

  return (
    <Tag className={[cls, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </Tag>
  );
}

Title.propTypes = {
  level: PropTypes.oneOf([1, 2, 3, 4, 5, 6]),
  type: PropTypes.oneOf(['default', 'secondary', 'success', 'warning', 'danger']),
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  underline: PropTypes.bool,
  del: PropTypes.bool,
  disabled: PropTypes.bool,
  ellipsis: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

// ─── Text ─────────────────────────────────────────────────────────────────────

function Text({
  type = 'default',
  strong = false,
  italic = false,
  underline = false,
  del: isDelete = false,
  mark = false,
  code = false,
  disabled = false,
  ellipsis = false,
  children = null,
  className = '',
  ...rest
}) {
  const cls = buildClasses('text', { type, strong, italic, underline, del: isDelete, mark, code, disabled, ellipsis });

  return (
    <span className={[cls, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </span>
  );
}

Text.propTypes = {
  type: PropTypes.oneOf(['default', 'secondary', 'success', 'warning', 'danger']),
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  underline: PropTypes.bool,
  del: PropTypes.bool,
  mark: PropTypes.bool,
  code: PropTypes.bool,
  disabled: PropTypes.bool,
  ellipsis: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

// ─── Paragraph ────────────────────────────────────────────────────────────────

function Paragraph({
  type = 'default',
  strong = false,
  italic = false,
  underline = false,
  del: isDelete = false,
  disabled = false,
  ellipsis = false,
  children = null,
  className = '',
  ...rest
}) {
  const cls = buildClasses('paragraph', { type, strong, italic, underline, del: isDelete, disabled, ellipsis });

  return (
    <p className={[cls, className].filter(Boolean).join(' ')} {...rest}>
      {children}
    </p>
  );
}

Paragraph.propTypes = {
  type: PropTypes.oneOf(['default', 'secondary', 'success', 'warning', 'danger']),
  strong: PropTypes.bool,
  italic: PropTypes.bool,
  underline: PropTypes.bool,
  del: PropTypes.bool,
  disabled: PropTypes.bool,
  ellipsis: PropTypes.bool,
  children: PropTypes.node,
  className: PropTypes.string,
};

// ─── Export ───────────────────────────────────────────────────────────────────

const Typography = { Title, Text, Paragraph };

export { Title, Text, Paragraph };
export default Typography;
