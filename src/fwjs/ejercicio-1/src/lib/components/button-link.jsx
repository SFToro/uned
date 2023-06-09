import Link from "@mui/material/Link";

export default function ButtonLink({ text }) {
  return (
    <Link component="button" variant="body2">
      {text}
    </Link>
  );
}
