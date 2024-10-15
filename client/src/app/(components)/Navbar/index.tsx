import { FC, memo } from "react";

type Props = {
 prop?: any;
};

const NavbarPage: FC<Props> = memo(({ prop }) => {
 return <div>index</div>;
});

NavbarPage.displayName = "NavbarPage";
export default NavbarPage;
