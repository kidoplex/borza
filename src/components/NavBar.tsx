"use client";

import * as React from "react";
import {
  BottomNavigation,
  BottomNavigationAction,
  Box,
  Avatar,
} from "@mui/material";
import HomeIcon from "@mui/icons-material/Home";
import SearchIcon from "@mui/icons-material/Search";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import LoginIcon from "@mui/icons-material/Login";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LogoutIcon from "@mui/icons-material/Logout";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import ToggleThemeButton from "@/components/ToggleThemeButton";
import { Lock, Info } from '@mui/icons-material';

export default function Navbar() {
  const [value, setValue] = React.useState("/");
  const [activeIcon, setActiveIcon] = React.useState<string | null>(null); // Stav pre aktívnu ikonu
  const router = useRouter();
  const { data: session, status } = useSession();

  const handleNavigation = (event: React.SyntheticEvent, newValue: string) => {
    console.log(newValue)
    setValue(newValue);
    router.push(newValue);
  };

  const nonAuthPaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "O nas", value: "/o-nas", icon: <Info /> },
    { label: "GDPR", value: "/gdpr", icon: <Lock /> },
    { label: "Registrácia", value: "/auth/registracia", icon: <AppRegistrationIcon /> },
    { label: "Prihlásenie", value: "/auth/prihlasenie", icon: <LoginIcon /> },
  ];

  const authPaths = [
    { label: "Domov", value: "/", icon: <HomeIcon /> },
    { label: "Hľadať", value: "/hladat", icon: <SearchIcon /> },
    { label: "Pridať", value: "/prispevok", icon: <AddCircleIcon /> },
    {
      label: "Profil",
      value: "/profil",
      icon: session?.user?.image ? (
        <Avatar
          alt={session?.user?.name || "User"}
          src={session?.user?.image || undefined}
        />
      ) : (
        <Avatar>{session?.user?.name?.charAt(0) || "U"}</Avatar>
      ),
    },
    { label: "Odhlásiť", value: "/auth/odhlasenie", icon: <LogoutIcon /> },
  ];

  const navigationPaths = status === "authenticated" ? authPaths : nonAuthPaths;

  const handleIconClick = (label: string) => {
    setActiveIcon(label); // Uložíme označenú ikonu ako aktívnu
  };

  return (
    <Box sx={{ width: "100%", position: "fixed", bottom: 0 }}>
      <BottomNavigation showLabels value={value} onChange={handleNavigation}>
        {navigationPaths.map((path) => (
          <BottomNavigationAction
            key={path.value}
            label={path.label}
            value={path.value}
            icon={React.cloneElement(path.icon, {
              sx: {
                color: activeIcon === path.label ? "red" : "inherit", // Zmena farby ikony na červenú, ak je aktívna
              },
            })}
            sx={{
              color: activeIcon === path.label ? "red" : "inherit", // Zmena farby textu na červenú, ak je aktívny
              "& .MuiBottomNavigationAction-label": {
                color: activeIcon === path.label ? "red" : "inherit", // Zmena farby textu pod ikonou na červenú, ak je aktívny
              },
            }}
            onClick={() => handleIconClick(path.label)} // Nastavenie aktívnej ikony po kliknutí
          />
        ))}
        <ToggleThemeButton />
      </BottomNavigation>
    </Box>
  );
}



