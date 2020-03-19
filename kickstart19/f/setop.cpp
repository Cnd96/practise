// C++ program to create Set of Pairs 

#include <bits/stdc++.h> 
using namespace std; 

typedef pair<int, int> pairs; 

// Constant reference 
// reference for speed const to avoid changing values 
void display(const set<pairs>& s) 
{ 
	bool found = false; 

	// range-based for loop 
	for (auto const &x : s) { 
		found = true; 
		cout << "(" << x.first << ", "
			<< x.second << ")"
			<< " "; 
	} 

	if (not found) { 
		cout << "No valid pair\n"; 
	} 
} 
int main() 
{ 
// 	set<int> s1;
//     set<int> s2;
//     set<int> s4;
//     s1.insert(1); 
//     s1.insert(2);
//     s1.insert(3);
//     s2.insert(1);
//     s2.insert(3); 
//     s2.insert(4);  
//     s4.insert(5);  
//     s4.insert(6);  
    
// // fill your sets
//     s1.insert(s2.begin(), s2.end());
//     s1.insert(s4.begin(), s4.end());
//     set<int> s3=s1; 
//     s1.erase(2);
//     for (auto it : s1) 
// 		cout << it << " "; // Sorted 
//     cout<<endl;

//     for (auto it : s3) 
// 		cout << it << " "; // Sorted 

  vector<int> dd={2,3,4,5,5,6};
  vector<int> d2=dd;
  // dd.erase(dd.begin()+1);
set<int> s1;
 s1.insert(dd.begin(), dd.end());
 d2.push_back(8);
  s1.insert(d2.begin(), d2.end());
// dd.erase(remove(dd.begin(), dd.end(), 5), dd.end());
    for (auto it : dd)
    cout<<it; 
    cout<<endl;
    for (auto it : d2)
    cout<<it; 
    cout<<endl;
    for (auto it : s1)
    cout<<it; 

} 
