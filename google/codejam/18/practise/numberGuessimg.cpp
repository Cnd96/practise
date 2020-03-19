#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main()
{
    // cout<<(7/2);
    int t;
    cin >> t;
    for (int i = 1; i <= t; i++)
    {
      int a,b,n,newN;
      string s;
      cin>>a>>b>>n;
      while(true){
          newN=(a+b+1)/2;
          cout<<newN<<endl;
          cin>>s;
          if(s=="TOO_BIG"){
              b=newN;
          }
          else if (s=="TOO_SMALL")
          {
              a=newN;
              /* code */
          }
          else if (s=="CORRECT")
          {
              break;
          }
          else
          {
              return 0;
          }
          
      }
    }
    return 0;
}
