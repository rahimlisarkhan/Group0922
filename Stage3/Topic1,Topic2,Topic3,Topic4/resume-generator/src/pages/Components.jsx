import Button from '../components/Button';
import Input from '../components/Input';
import Typography from '../components/Typography';
import Avatar from '../components/Avatar';

const { Title, Text, Paragraph } = Typography;

function App() {
  return (
    <div style={{ padding: '40px', maxWidth: 800, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 40 }}>

      {/* Typography */}
      <section>
        <Title level={2}>Typography</Title>
        <Title level={1}>Heading 1</Title>
        <Title level={2}>Heading 2</Title>
        <Title level={3}>Heading 3</Title>
        <Title level={4}>Heading 4</Title>
        <Title level={5}>Heading 5</Title>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap', marginTop: 8 }}>
          <Text>Default</Text>
          <Text type="secondary">Secondary</Text>
          <Text type="success">Success</Text>
          <Text type="warning">Warning</Text>
          <Text type="danger">Danger</Text>
          <Text strong>Bold</Text>
          <Text italic>Italic</Text>
          <Text underline>Underline</Text>
          <Text del>Delete</Text>
          <Text mark>Mark</Text>
          <Text code>code</Text>
        </div>
        <Paragraph type="secondary" style={{ marginTop: 8 }}>
          This is a paragraph with secondary color. Great for descriptions and helper content.
        </Paragraph>
      </section>

      {/* Button */}
      <section>
        <Title level={2}>Button</Title>
        <div style={{ display: 'flex', gap: 12, flexWrap: 'wrap' }}>
          <Button size="sm" variant="primary">Primary</Button>
          <Button variant="secondary">Secondary</Button>
          <Button variant="ghost">Ghost</Button>
          <Button variant="danger">Danger</Button>
          <Button variant="link">Link</Button>
          <Button disabled>Disabled</Button>
          <Button loading>Loading</Button>
        </div>
        <div style={{ display: 'flex', gap: 12, marginTop: 12 }}>
          <Button size="sm">Small</Button>
          <Button size="md">Medium</Button>
          <Button size="lg">Large</Button>
        </div>
      </section>

      {/* Input */}
      <section>
        <Title level={2}>Input</Title>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          <Input label="Name" placeholder="Enter your name" required />
          <Input label="Email" placeholder="you@example.com" type="email" prefix="@" />
          <Input label="With error" status="error" helperText="This field is required" defaultValue="bad value" />
          <Input label="With warning" status="warning" helperText="Consider a stronger password" />
          <Input label="Success" status="success" helperText="Looks good!" defaultValue="valid" />
          <Input label="Character count" maxLength={50} showCount placeholder="Max 50 chars" />
          <Input label="Disabled" disabled defaultValue="Cannot edit" />
        </div>
      </section>

      {/* Avatar */}
      <section>
        <Title level={2}>Avatar</Title>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', flexWrap: 'wrap' }}>
          <Avatar src="https://i.pravatar.cc/150?img=1" alt="User 1" />
          <Avatar initials="AB" />
          <Avatar initials="CD" color="#722ed1" />
          <Avatar initials="EF" shape="square" />
          <Avatar icon="👤" />
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginTop: 16, flexWrap: 'wrap' }}>
          <Avatar initials="ON" status="online" />
          <Avatar initials="BZ" status="busy" />
          <Avatar initials="AW" status="away" />
          <Avatar initials="OF" status="offline" />
        </div>
        <div style={{ display: 'flex', gap: 16, alignItems: 'center', marginTop: 16 }}>
          <Avatar size="xs" initials="XS" />
          <Avatar size="sm" initials="SM" />
          <Avatar size="md" initials="MD" />
          <Avatar size="lg" initials="LG" />
          <Avatar size="xl" initials="XL" />
          <Avatar size={80} initials="80" />
        </div>
      </section>

    </div>
  );
}

export default App;
