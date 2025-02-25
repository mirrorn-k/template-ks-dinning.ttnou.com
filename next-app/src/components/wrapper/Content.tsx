import { Typography } from "@mui/material";
import ResponsiveBox from "@/atoms/Box";
import { grey } from "@mui/material/colors";

const ContentWarpper = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => {
  return (
    <>
      <Typography
        variant="h4"
        component="h3"
        className="font-text"
        sx={{
          textAlign: "center",
          width: "100%",
          backgroundColor: grey[900],
          color: grey[50],
          padding: 2,
          fontWeight: "bold",
        }}
      >
        {title}
      </Typography>
      <ResponsiveBox maxWidth="lg" gap={4} sx={{ mt: 6, mb: 6 }}>
        {children}
      </ResponsiveBox>
    </>
  );
};

export default ContentWarpper;
