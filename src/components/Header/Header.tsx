import { Navbar, NavbarContent, NavbarItem } from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";

const Header = () => {
  return (
    <Navbar maxWidth="2xl" data-justify="end">
      <NavbarContent>
        <NavbarItem>
          <Link color="foreground" href="/posts">
            <p className="text-3xl font-bold underline">Posts</p>
          </Link>
        </NavbarItem>
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
