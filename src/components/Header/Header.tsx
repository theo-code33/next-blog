import {
  Button,
  Link,
  Navbar,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/react";

const Header = () => {
  return (
    <Navbar maxWidth="2xl">
      <NavbarContent>
        <NavbarItem>
          <Link color="foreground" href="/posts">
            Posts
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent>
        <NavbarItem>
          <Button as={Link} color="primary" href="/admin" variant="flat">
            Admin
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Navbar>
  );
};

export default Header;
