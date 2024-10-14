// src/app/page.tsx

import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useSession } from "next-auth/react";
import AuthHomeView from "@/sections/AuthHomeView"; // Komponent pre prihlásených používateľov
import NonAuthHomeView from "@/sections/NonAuthHomeView"; // Komponent pre neprihlásených používateľov
import { Box, CircularProgress } from "@mui/material";

export const metadata = { title: "Domov | ZoškaSnap" };

export default function Home() {
  <Container> 
      <Typography> Domovská stránka </Typography>
    </Container>
  const { data: session, status } = useSession(); // Používanie useSession na získanie informácií o používateľovi
  if (status === 'loading') {
    return (
      <Box display="flex" justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress />
      </Box>
    );
  }

  // Ak používateľ nie je prihlásený, zobraz NonAuthHomeView
  if (!session) {
    return <NonAuthHomeView />;
  }

  // Ak používateľ je prihlásený, zobraz AuthHomeView
  return <AuthHomeView />;


}




















{/* 


// import HomeIcon from "@mui/icons-material/Home";
// import SearchIcon from "@mui/icons-material/Search";
// import AddCircleIcon from "@mui/icons-material/AddCircle";
// import NotificationsIcon from "@mui/icons-material/Notifications";
// import AccountCircleIcon from "@mui/icons-material/AccountCircle";
// import { useState } from "react";

//   const [navValue, setNavValue] = useState(0);
    // <Container maxWidth="sm" sx={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
    //   <Box component="main" sx={{ flexGrow: 1, paddingTop: 2 }}>
    //     <Typography variant="h4" gutterBottom>
    //       Vitajte na SnapZoška!
    //     </Typography>
    //     <Typography variant="body1">
    //       Toto je vaša úvodná stránka. Tu nájdete príspevky od používateľov, pridáte vlastné alebo preskúmate nové príspevky.
    //     </Typography>
    //   </Box>

    //   {/* Bottom Navigation */}
    //   <BottomNavigation
    //     value={navValue}
    //     onChange={(event, newValue) => setNavValue(newValue)}
    //     showLabels
    //   >
    //     <BottomNavigationAction label="Domov" icon={<HomeIcon />} />
    //     <BottomNavigationAction label="Hľadať" icon={<SearchIcon />} />
    //     <BottomNavigationAction label="Pridať" icon={<AddCircleIcon />} />
    //     <BottomNavigationAction label="Notifikácie" icon={<NotificationsIcon />} />
    //     <BottomNavigationAction label="Profil" icon={<AccountCircleIcon />} />
    //   </BottomNavigation>
    // </Container> */}
