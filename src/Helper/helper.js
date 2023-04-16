export const headerTextManager = (location, user) => {
  const pageLocation = location?.pathname.split("/")[1];
  
  if (!pageLocation) {
    return null
  }
  let headerText = [];

  if (user === null) {
    if (pageLocation === "home") {
      headerText.name = "Dashboard";
      headerText.link = "login"
    }
    if (pageLocation === "login") {
      headerText.name = "Home";
      headerText.link = "home"
    }
    if (pageLocation === ":home") {
      headerText.name = "Dashboard";
      headerText.link = "login"
    }
  }
  if ( user !== null) {
    if (pageLocation === "home") {
      headerText.name = "Dashboard";
      headerText.link = "dashboard"
    }
    if (pageLocation === "dashboard") {
      headerText.name = "Home";
      headerText.link = "home"
    }
  }

  return headerText;
};
