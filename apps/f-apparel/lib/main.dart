import 'package:f_apparel/screens/auth.screen.dart';
import 'package:f_apparel/screens/recovery.screen.dart';
import 'package:f_apparel/screens/register.screen.dart';
import 'package:flutter/material.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'My Flutter App',
      theme: ThemeData(primarySwatch: Colors.blue),
      initialRoute: '/',
      routes: {
        '/': (context) => const AuthScreen(),
        '/recovery': (context) => const RecoveryScreen(),
        '/register': (context) => const RegisterScreen(),
        // '/home': (context) => HomeScreen(),
        // '/favorites': (context) => FavoritesScreen(),
        // '/cart': (context) => CartScreen(),
        // '/categories': (context) => CategoriesScreen(),
        // '/notifications': (context) => NotificationsScreen(),
        // '/product': (context) => ProductScreen(),
      },
    );
  }
}
