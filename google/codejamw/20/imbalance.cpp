#include "bits/stdc++.h"
#include <iostream> 
#include <vector> 
#include <string> 
using namespace std;

int cot;
int n;
vector <int> a[2000];
bool arra[2000] = {false};
char current='O';
string s;
void assign(int ind){
  if(cot==n){
    return ;
  }
  for (auto it = a[ind].begin(); it != a[ind].end(); it++) {
     if(arra[*it-1]==false){
        if(current=='L'){
            s[*it-1]='R';
            current='R';
            cot++;
            arra[*it-1]=true;
            assign(*it-1);
        }
        else
        {
            s[*it-1]='L';
            current='L';
            cot++;
            arra[*it-1]=true;
            assign(*it-1);
        }
        
     }
       
     if(cot==n){
        break ;
     }
  } 
}

int main()
{
    int t;
    cin>>t;

    for (int i = 1; i <=t; i++)
    {
        int number;
        cot=0;
        cin>>n;
        // arra={false};
        int r[n];
        
        // vector <int> left;
        // vector <int> right;
        s.resize(n);
        
        for (int i = 0; i <n; i++){
            cin>>number;
            a[i].clear();
            r[i]=(number);
        }
        for (int i = 0; i <n; i+=2){
            a[i].push_back(i+2);
            a[i+1].push_back(i+1);
            if (find(a[r[i]-1].begin(), a[r[i]-1].end(), r[i+1]) == a[r[i]-1].end()) {
               a[r[i]-1].push_back(r[i+1]);
            }
            if (find( a[r[i+1]-1].begin(),  a[r[i+1]-1].end(), r[i]) ==  a[r[i+1]-1].end()) {
              a[r[i+1]-1].push_back(r[i]);
            }
        }
        // cout<<s;
        while (cot<n)
        {
            for (int i = 0; i < n; i++) { 
                if(arra[i]==false){
                    s[i]='L';
                    current='L';
                    cot++;
                    arra[i]=true;
                    assign(i);
                }
                if(cot==n){
                    break ;
                }
            }
        }
        cout<<"Case #"<<i<<": "<<s<<endl;
        // s[0]='L';
        // s[1]='R';
        // cout<<s;
        
        // // assign(n,r);
        for (int j = 0; j <2000; j++){
            arra[j]=false;
        }
        // // for (auto it = s.cbegin(); 
        // //      it != s.cend(); ++it) {
        // //     cout << *it << " k"; 
        // // }
        //    for (int i = 0; i < n; i++) { 
    
        //     cout << "Elements at index "
        //         << i+1 << ": "; 
        //     for (auto it = a[i].begin(); 
        //         it != a[i].end(); it++) {
        //         cout << *it << ' '; 
        //     } 
        //     cout << endl; 
        // } 
    }    
}
// 2
// 4
// 3 1 4 2
// 6
// 1 2 3 4 5 6

// for (int i = 0; i < 6; i++) { 
  
//         cout << "Elements at index "
//              << i << ": "; 
//         for (auto it = a[i].begin(); 
//              it != a[i].end(); it++) {
//             cout << *it << ' '; 
//         } 
//         cout << endl; 
//     } 


// 1
// 4
// 3 1 2 4