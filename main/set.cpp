// CPP program to demonstrate working of set 
#include <bits/stdc++.h> 
using namespace std; 

int main() 
{ 
	set<string> s1; 
	s1.insert("scas"); 
	s1.insert("cas"); 
	s1.insert("ascc"); 
	s1.insert("cas"); 

	cout << "Elements in set:\n"; 
	for (auto it : s1) 
		cout << it << " "; // Sorted 

	return 0; 
} 
