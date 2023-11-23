'use client'
import Link from "next/link";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { 
  ChevronDown, 
  User, 
  LogOut, 
  ArrowLeft, 
  LayoutDashboard,
  Building2,
  Users,
  ShieldCheck,
  MailQuestion,
  MessageSquare,
  UserCog,
  LinkIcon
} from "lucide-react";
import { usePathname, useRouter } from "next/navigation";

import ImageBackground from "@assets/signin-background.jpg";

import { useApp } from "@hooks/useApp";

const links = [
  {
    icon: LayoutDashboard,
    path: "/dashboard",
    name: "Principal"
  },
  {
    icon: Building2,
    path: "/condominiuns",
    name: "Condomínios"
  },
  {
    icon: Users,
    path: "/users",
    name: "Usuários"
  },
  {
    icon: ShieldCheck,
    path: "/permissions",
    name: "Permissões"
  },
  {
    icon: MailQuestion,
    path: "/suggestions",
    name: "Sugestões"
  },
  {
    icon: MessageSquare,
    path: "/messages",
    name: "Mensagens"
  },
  {
    icon: UserCog,
    path: "/roles",
    name: "Papeis"
  },
  {
    icon: LinkIcon,
    path: "/pages",
    name: "Páginas"
  },
]

export function Header() {
  const { showedMenu, toggleMenu } = useApp()
  const { push } = useRouter();
  const path = usePathname();

  function handleLogout() {
    push("/signin");
  }

  function handleToggleSidebar() {
    toggleMenu();
  }

  function handleNavigate(link: string) {
    push(link);
  }

  return (
    <>
      <header className="w-full h-14 px-6 bg-zinc-700 flex items-center justify-between rounded-br-xl">
        <button 
          onClick={handleToggleSidebar}
          className="w-10 h-10 rounded-full bg-zinc-600 flex items-center justify-center hover:bg-zinc-500 transition duration-200 ease-in-out"
        >
          <ArrowLeft 
            size={20} 
            className={`text-zinc-100 ${showedMenu ? "rotate-180" : "rotate-0"} transition duration-150 ease-in-out`} 
          />
        </button>


        <Menu>
          <Menu.Button className="bg-zinc-600 text-zinc-100 font-bold h-10 pr-4 rounded-full flex items-center justify-between gap-1">
            <Image 
              alt="Image of Administrator"
              src="https://github.com/kendi95.png"
              width={40}
              height={40}
              className="rounded-full border-2 border-zinc-700 mr-2"
            />
            Administrador
            <ChevronDown className="text-zinc-100 ml-2" size={18} />
          </Menu.Button>
          <Menu.Items className="z-50 absolute right-6 top-[52px] bg-zinc-600 w-[20vw] rounded-lg flex flex-col overflow-hidden">
            <Menu.Item as="div" className="flex items-center gap-2 hover:bg-zinc-500 p-3 off">
              <User size={18} className="text-zinc-100" />
              <Link href="/profile" className="text-base text-zinc-100 font-bold w-full">
                Minha conta
              </Link>
            </Menu.Item>
            <Menu.Item 
              as="button" 
              className="flex items-center gap-2 hover:bg-zinc-500 p-3"
              onClick={handleLogout}
            >
              <LogOut size={18} className="text-zinc-100" />
              <Link 
                href="/signin" 
                className="text-base text-zinc-100 font-bold"
              >
                Sair do sistema
              </Link>
            </Menu.Item>
          </Menu.Items>
        </Menu>
      </header>
      <nav className={`${!showedMenu ? "w-60" : "w-16 px-0"} px-1 overflow-y-auto transition duration-200 ease-in-out lg:h-[91.5vh] 2xl:h-[94.1vh] z-50 bg-zinc-700 flex flex-col gap-12 items-center rounded-br-xl scrollbar-thin scrollbar-thumb-zinc-600 scrollbar-track-zinc-700 scrollbar-thumb-rounded-md`}>
        <div className={`flex flex-col items-center justify-center gap-2 mt-6 ${showedMenu ? "hidden" : ""}`}>
          <Image 
            alt="Image of system"
            src={ImageBackground}
            width={160}
            className="rounded-xl border-2 border-zinc-600"
            style={{
              objectFit: "fill",
            }}
          />

          <h1 className="text-xl text-zinc-100 font-bold text-center">
            Nome do sistema
          </h1>
        </div>

        <ul className="flex flex-col w-full gap-1 pb-4">
          {links.map(({ name, path: pathName, icon: Icon }) => (
            <li 
              key={name} 
              title={name}
              onClick={() => handleNavigate(pathName)}
              className={`px-6 py-3 flex items-center gap-2 rounded-xl cursor-pointer hover:bg-zinc-600 ${pathName === path && 'bg-zinc-600'}`}
            >
              <Icon size={18} className="text-zinc-100" />
              <Link href={pathName} className={`text-base text-zinc-100 font-bold ${showedMenu ? "hidden" : ""}`}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </>
  )
}