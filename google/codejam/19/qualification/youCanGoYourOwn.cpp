#include "bits/stdc++.h"
#include <iostream> 
#include <vector> 
using namespace std;

int main()
{
    int t;
    cin>>t;
    for (int i = 1; i <=t; i++)
    {
       int n;
       string s;
       cin>>n;
       cin>>s;
       string answer(s.size(), 'S');
       for(int j=0;j<s.size();j++){
            if(s[j]=='S'){
                answer[j]='E';
            }
            else
            {
                answer[j]='S';
            } 
       }
        cout<<"Case #"<<i<<": "<<answer<<endl;
    }
}