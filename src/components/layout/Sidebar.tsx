"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import {
  Banknote,
  ChevronDown,
  Ellipsis,
  Home,
  LayoutDashboard,
  PieChart,
  Settings,
  Star,
} from "lucide-react";
import { useSidebarStore } from "@/app/stores/sidebar";

type NavItem = {
  name: string;
  icon: React.ReactNode;
  path?: string;
  badge?: number;
  subItems?: { name: string; path: string; badge?: number }[];
};

const navItems: NavItem[] = [
  {
    icon: <LayoutDashboard />,
    name: "Beranda",
    path: "/dashboard",
  },
  {
    icon: <Home />,
    name: "Profil Desa",
    subItems: [
      { name: "Visi Misi Desa", path: "/dashboard/visi-misi" },
      {
        name: "Sejarah Desa",
        path: "/dashboard/sejarah",
      },
      { name: "Geografis", path: "/dashboard/geografis" },
      { name: "Demografis", path: "/dashboard/demografis" },
      { name: "Ekonomi", path: "/dashboard/ekonomi" },
    ],
  },
  {
    name: "Pemerintah Desa",
    icon: <Banknote />,
    path: "/dashboard/pemerintah-desa",
  },
  {
    name: "Potensi Desa",
    icon: <Star />,
    path: "/dashboard/potensi-desa",
  },
  {
    name: "Pengaturan",
    icon: <Settings />,
    path: "/dashboard/pengaturan/profile",
  },
];

const othersItems: NavItem[] = [
  {
    icon: <PieChart />,
    name: "Pengaturan",
    subItems: [
      { name: "Line Chart", path: "/line-chart" },
      { name: "Bar Chart", path: "/bar-chart" },
    ],
  },
];

const AppSidebar: React.FC = () => {
  const { isExpanded, isMobileOpen, isHovered, setIsHovered } =
    useSidebarStore();
  const pathname = usePathname();

  const isActive = useCallback((path: string) => path === pathname, [pathname]);

  const isAnySubItemActive = (subItems?: { name: string; path: string }[]) =>
    subItems?.some((sub) => isActive(sub.path));

  const [openSubmenu, setOpenSubmenu] = useState<{
    type: "main" | "others";
    index: number;
  } | null>(null);
  const [subMenuHeight, setSubMenuHeight] = useState<Record<string, number>>(
    {}
  );
  const subMenuRefs = useRef<Record<string, HTMLDivElement | null>>({});

  useEffect(() => {
    // Expand submenu jika path cocok
    let submenuMatched = false;
    ["main", "others"].forEach((menuType) => {
      const items = menuType === "main" ? navItems : othersItems;
      items.forEach((nav, index) => {
        if (nav.subItems) {
          nav.subItems.forEach((subItem) => {
            if (isActive(subItem.path)) {
              setOpenSubmenu({ type: menuType as "main" | "others", index });
              submenuMatched = true;
            }
          });
        }
      });
    });
    if (!submenuMatched) setOpenSubmenu(null);
  }, [pathname, isActive]);

  useEffect(() => {
    if (openSubmenu !== null) {
      const key = `${openSubmenu.type}-${openSubmenu.index}`;
      if (subMenuRefs.current[key]) {
        setSubMenuHeight((prevHeights) => ({
          ...prevHeights,
          [key]: subMenuRefs.current[key]?.scrollHeight || 0,
        }));
      }
    }
  }, [openSubmenu]);

  useEffect(() => {
    const handleResize = () => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) {
        useSidebarStore.setState({ isMobileOpen: false, isExpanded: true });
      } else {
        useSidebarStore.setState({ isExpanded: false });
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleSubmenuToggle = (index: number, menuType: "main" | "others") => {
    setOpenSubmenu((prev) =>
      prev?.type === menuType && prev?.index === index
        ? null
        : { type: menuType, index }
    );
  };

  const renderMenuItems = (items: NavItem[], menuType: "main" | "others") => (
    <ul className="flex flex-col gap-4">
      {items.map((nav, index) => {
        const isSubActive = isAnySubItemActive(nav.subItems);
        return (
          <li key={nav.name}>
            {nav.subItems ? (
              <button
                onClick={() => handleSubmenuToggle(index, menuType)}
                className={`menu-item group cursor-pointer ${
                  isSubActive ? "menu-item-active" : "menu-item-inactive"
                } ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "lg:justify-start"
                }`}
              >
                <span
                  className={`${
                    isSubActive
                      ? "menu-item-icon-active"
                      : "menu-item-icon-inactive"
                  }`}
                >
                  {nav.icon}
                </span>
                {(isExpanded || isHovered || isMobileOpen) && (
                  <span className="menu-item-text">{nav.name}</span>
                )}
                {(isExpanded || isHovered || isMobileOpen) && (
                  <ChevronDown
                    className={`ml-auto w-5 h-5 transition-transform duration-200 ${
                      openSubmenu?.type === menuType &&
                      openSubmenu?.index === index
                        ? "rotate-180"
                        : ""
                    }`}
                  />
                )}
              </button>
            ) : (
              nav.path && (
                <Link
                  href={nav.path}
                  className={`menu-item group ${
                    isActive(nav.path)
                      ? "menu-item-active"
                      : "menu-item-inactive"
                  }`}
                >
                  <span
                    className={`${
                      isActive(nav.path)
                        ? "menu-item-icon-active"
                        : "menu-item-icon-inactive"
                    }`}
                  >
                    {nav.icon}
                  </span>
                  {(isExpanded || isHovered || isMobileOpen) && (
                    <span className="menu-item-text">{nav.name}</span>
                  )}
                  {nav.badge && (
                    <span className="ml-auto menu-dropdown-badge-active menu-dropdown-badge">
                      {nav.badge}
                    </span>
                  )}
                </Link>
              )
            )}

            {nav.subItems && (isExpanded || isHovered || isMobileOpen) && (
              <div
                ref={(el) => {
                  subMenuRefs.current[`${menuType}-${index}`] = el;
                }}
                className="overflow-hidden transition-all duration-300"
                style={{
                  height:
                    openSubmenu?.type === menuType &&
                    openSubmenu?.index === index
                      ? `${subMenuHeight[`${menuType}-${index}`]}px`
                      : "0px",
                }}
              >
                <ul className="mt-2 space-y-1 ml-9">
                  {nav.subItems.map((subItem) => (
                    <li key={subItem.name}>
                      <Link
                        href={subItem.path}
                        className={`menu-dropdown-item ${
                          isActive(subItem.path)
                            ? "menu-dropdown-item-active"
                            : "menu-dropdown-item-inactive"
                        }`}
                      >
                        {subItem.name}
                        {subItem.badge && (
                          <span
                            className={`ml-auto ${
                              isActive(subItem.path)
                                ? "menu-dropdown-badge-active"
                                : "menu-dropdown-badge-inactive"
                            } menu-dropdown-badge`}
                          >
                            {subItem.badge}
                          </span>
                        )}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </li>
        );
      })}
    </ul>
  );

  return (
    <aside
      className={`fixed mt-16 flex flex-col lg:mt-0 top-0 px-5 left-0 bg-white dark:bg-gray-900 dark:border-gray-800 text-gray-900 h-screen transition-all duration-300 ease-in-out z-50 border-r border-gray-200 
        ${
          isExpanded || isMobileOpen
            ? "w-[290px]"
            : isHovered
            ? "w-[290px]"
            : "w-[90px]"
        }
        ${isMobileOpen ? "translate-x-0" : "-translate-x-full"}
        lg:translate-x-0`}
      onMouseEnter={() => !isExpanded && setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className={`py-8 flex justify-center`}>
        <Link href="/">
          {isExpanded || isHovered || isMobileOpen ? (
            <div className="flex flex-col justify-center items-center">
              <Image
                className="dark:hidden"
                src="/logo-desa.png"
                alt="Logo"
                width={48}
                height={48}
              />
              <Image
                className="hidden dark:block"
                src="/logo-desa.png"
                alt="Logo"
                width={48}
                height={48}
              />
              <h2 className="text-center text-2xl font-semibold text-brand-500 mx-auto">
                Desa Wuwuk
              </h2>
            </div>
          ) : (
            <Image src="/logo-desa.png" alt="Logo" width={32} height={32} />
          )}
        </Link>
      </div>

      <div className="flex flex-col overflow-y-auto duration-300 ease-linear no-scrollbar">
        <nav className="mb-6">
          <div className="flex flex-col gap-4">
            <div>
              <h2
                className={`mb-4 text-xs uppercase flex leading-[20px] text-gray-400 ${
                  !isExpanded && !isHovered
                    ? "lg:justify-center"
                    : "justify-start"
                }`}
              >
                {isExpanded || isHovered || isMobileOpen ? (
                  "Menu"
                ) : (
                  <Ellipsis />
                )}
              </h2>
              {renderMenuItems(navItems, "main")}
            </div>
          </div>
        </nav>
      </div>
    </aside>
  );
};

export default AppSidebar;
