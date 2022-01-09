import {useRouter} from "next/router";
import {Link as MuiLink} from "@mui/material";
import NextLink from "next/link";

export default function AppLink(props) {
    const router = useRouter();
    const {href = '#', children} = props;
    return (
        <NextLink href={href}>
            <MuiLink sx={{cursor: 'pointer', '&:hover, &:active': {color: 'inherit'}}} {...props}>
                {children}
            </MuiLink>
        </NextLink>
    );
}