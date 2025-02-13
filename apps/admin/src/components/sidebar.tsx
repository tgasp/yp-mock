import { Link, useLocation } from 'react-router-dom'
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from '@workspace/ui/components/navigation-menu'
import {
  LayoutDashboard,
  Users,
  Settings,
  Package,
  BarChart3,
} from 'lucide-react'
import { cn } from '@workspace/ui/lib/utils'

interface NavItem {
  title: string
  href: string
  icon: JSX.Element
}

const navItems: NavItem[] = [
  {
    title: 'Dashboard',
    href: '/dashboard',
    icon: <LayoutDashboard className="h-4 w-4" />,
  },
  {
    title: 'Users',
    href: '/users',
    icon: <Users className="h-4 w-4" />,
  },
  {
    title: 'Analytics',
    href: '/analytics',
    icon: <BarChart3 className="h-4 w-4" />,
  },
  {
    title: 'Products',
    href: '/products',
    icon: <Package className="h-4 w-4" />,
  },
  {
    title: 'Settings',
    href: '/settings',
    icon: <Settings className="h-4 w-4" />,
  },
]

export function Sidebar() {
  const location = useLocation()

  return (
    <div className="flex h-full w-[240px] flex-col border-r bg-background">
      {/* Logo */}
      <div className="flex h-16 items-center border-b px-6">
        <span className="text-lg font-semibold">Admin Panel</span>
      </div>

      {/* Navigation */}
      <NavigationMenu className="flex-1 p-2">
        <NavigationMenuList className="flex flex-col gap-1">
          {navItems.map((item) => {
            const isActive = location.pathname === item.href

            return (
              <NavigationMenuItem key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    'group flex w-full items-center gap-x-3 rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground focus:outline-none disabled:pointer-events-none disabled:opacity-50',
                    isActive && 'bg-accent text-accent-foreground'
                  )}
                >
                  {item.icon}
                  {item.title}
                </Link>
              </NavigationMenuItem>
            )
          })}
        </NavigationMenuList>
      </NavigationMenu>

      {/* Footer */}
      <div className="border-t p-4">
        <p className="text-xs text-muted-foreground">
          © 2024 Admin Panel. All rights reserved.
        </p>
      </div>
    </div>
  )
}