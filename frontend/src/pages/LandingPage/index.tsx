import ManageHardware from "../Login";
import {
  createStyles,
  Container,
  Title,
  Text,
  Button,
  rem,
  Group,
} from "@mantine/core";
// import LoginPage from "../Login";
import { RefObject, useRef } from "react";

const useStyles = createStyles((theme) => ({
  root: {
    height: '100vh',
    backgroundColor: 'purple', // Change background color here
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundImage: `linear-gradient(250deg, rgba(130, 201, 30, 0) 0%, #062343 70%), url("https://unsplash.com/photos/BxgVEo_rF-o")`,
    paddingTop: `calc(${theme.spacing.xl} * 3)`,
    paddingBottom: `calc(${theme.spacing.xl} * 3)`,
  },

  inner: {
    display: "flex",
    justifyContent: "space-between",
    width: 800,
    [theme.fn.smallerThan("md")]: {
      flexDirection: "column",
    },
  },

  image: {
    [theme.fn.smallerThan("md")]: {
      display: "none",
    },
  },

  content: {
    width: 1000,
    display: "flex",
    alignItems: "center",
    paddingTop: `calc(${theme.spacing.xl} * 2)`,
    paddingBottom: `calc(${theme.spacing.xl} * 2)`,
    marginRight: `calc(${theme.spacing.xl} * 3)`,
    [theme.fn.smallerThan("md")]: {
      marginRight: 0,
    },
  },

  title: {
    color: theme.white,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontWeight: 900,
    lineHeight: 1.05,
    fontSize: rem(60),

    [theme.fn.smallerThan("md")]: {
      maxWidth: "100%",
      fontSize: rem(34),
      lineHeight: 1.15,
    },
  },

  description: {
    color: theme.white,
    opacity: 0.75,
    textAlign: 'justify',
    maxWidth: rem(1000),
    fontSize: rem(20), // Adjust the font size here

    [theme.fn.smallerThan('md')]: {
      maxWidth: '100%',
    },
  },

  control: {
    paddingLeft: rem(50),
    paddingRight: rem(50),
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
    fontSize: rem(22),

    [theme.fn.smallerThan("md")]: {
      width: "100%",
    },
  },
}));

const LandingPage = () => {
  
  const { classes } = useStyles();

  //ref the login
  const login: RefObject<HTMLInputElement> = useRef(null);

  //handle scroll
  const handleScroll = (elmRef: any) => {
    window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
  };

  return (
    <>
      {/* display: "flex", justifyContent: "center", alignItems: "center", */}
      <div className={classes.root} style={{ minHeight: "100vh" }}>
        <Group position="center">
          <Title
            className={classes.title}
            style={{ letterSpacing: "15px", marginTop: "25vh" }}
          >
            HARDWARE SYSTEM
          </Title>
        </Group>
        <Group position="center">
          <Text className={classes.description} mt={30}>
            Introducing an advanced hardware store management system for small
            businesses in Sri Lanka. Seamlessly handle stock and cashier tasks
            with efficiency. Easily manage inventory, suppliers, and real-time
            stock updates, ensuring products are always available. The cashier
            module simplifies transactions, while insights into sales trends
            optimize inventory. Secure payment options and customer loyalty
            features enhance the shopping experience. With a user-friendly
            interface and cloud-based access, streamline operations for success.
            Embrace technology to elevate your hardware store, offering
            impeccable service and seamless management in a single solution.
          </Text>
        </Group>
        <Group position="center">
          <Button
            variant="gradient"
            gradient={{ from: "pink", to: "yellow" }}
            size="xl"
            className={classes.control}
            mt={40}
            onClick={() => handleScroll(login)}
          >
            Get started
          </Button>
        </Group>
      </div>

      {/* // connect Login Page */}

      {/* <LoginPage ref={login}/> */}
      <ManageHardware ref={login}/>
    </>
  );
};

export default LandingPage;
