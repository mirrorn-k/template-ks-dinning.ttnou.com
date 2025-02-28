import { Typography } from '@mui/material';
import ClientOnly from '@atoms/ClientOnly';

const HtmlTypography = ({
  text,
  component = 'p',
  typoProps,
}: {
  text: string;
  component?: React.ElementType;
  typoProps: React.ComponentProps<typeof Typography>;
}) => {
  return (
    <ClientOnly>
      <Typography
        component={component}
        {...typoProps}
        dangerouslySetInnerHTML={{
          __html: `${text}`,
        }}
      />
    </ClientOnly>
  );
};

export default HtmlTypography;
