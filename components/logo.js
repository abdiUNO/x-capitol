import { Image } from 'theme-ui';
import { Link } from './link';

const logo = '/assets/images/x-capitol-logo.png';
const logoWhite = '/assets/images/x-capitol-logo.png';

export default function Logo({ isWhite }) {
  return (
    <Link
      path="/"
      sx={{
        variant: 'links.logo',
      }}>
      <Image
        src={isWhite ? logoWhite : logo}
        alt="startup landing logo"
        style={{ width: 160, paddingTop: 10 }}
      />
    </Link>
  );
}
