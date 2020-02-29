#include "bits/stdc++.h"
#include <iostream> 
#include <vector> 
#include <string> 
using namespace std;

int main()
{
    
    int t;
    cin>>t;

    for (int i = 1; i <=t; i++)
    {
        long long d;
        string p;
        long long charge=1;
        long long totalDamage=0;
        int noOfSteps=0;
        int noOfS=0;
        cin >> d >> p;
        for(int j=0 ; j<p.size();j++){
            if(p[j]=='S'){
                noOfS++;
                totalDamage+=(charge);
            }
            else 
            {
               charge*=2;
            }
        }
        if(noOfS>d)
        {
             cout<<"Case #"<<i<<": "<<"IMPOSSIBLE"<<endl;
        }
        else{
           while (totalDamage>d)
           {
              while (p[p.size()-1]=='C')
              {
                 p.erase(p.size()-1);
                 charge/=2;
              }
              for(int j=p.size()-2 ; j>=0;j--){
                if(p[j]=='C'){
                    swap(p[j],p[j+1]);
                    totalDamage=totalDamage-(charge/2);
                    noOfSteps++;
                    break;
                }
              }  
           }
           cout<<"Case #"<<i<<": "<<noOfSteps<<endl;
        }
    }    
}
