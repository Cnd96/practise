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
        string n;
        cin >> n;
        string s(n.size(), '0');
        for (int i=0; i<n.size();i++) {
            if(n[i]=='4'){
              n[i]='2';
              s[i]='2';
            }
	    }
        cout<<"Case #"<<i<<": "<<s<<" "<<n<<endl;
    }
}