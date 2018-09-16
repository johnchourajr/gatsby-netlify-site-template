export const tourNav = {
  name: "Tour", path:  "/tour",
}

export const eventsNav = {
  name: "Events", path:  "/events",
}

export const menusNav = {
  name: "Menus", path:  "/menus",
}

export const aboutNav = {
  name: "About", path:  "/about",
}

export const mainNav = [
  {
    ...tourNav
  },{
    ...eventsNav
  },{
    ...menusNav
  },{
    ...aboutNav
  },
]

export const subNav = [
  {
    name: "Contact",
    path:  "/contact",
  },{
    name: "Inquire",
    path:  "/inquire",
  },
]
