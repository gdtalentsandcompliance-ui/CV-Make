@@ .. @@
             >
               Builder
             </Link>
-            {user && (
-              <Link 
-                to="/dashboard" 
-                className={`text-sm font-medium transition-colors ${
-                  location.pathname === '/dashboard' 
-                    ? 'text-blue-600' 
-                    : 'text-gray-700 hover:text-blue-600'
-                }`}
-              >
-                Dashboard
-              </Link>
-            )}
           </nav>