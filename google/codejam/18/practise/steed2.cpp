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
       double d;
       int n;
       cin>>d>>n;
       double maxTime=0;
       double k,sp;
       
       for (int j = 0; j <n; j++){
           cin>>k>>sp;
           double time=(d-k)/sp;
           if(time>maxTime){
               maxTime=time;
           }
       }
       double maxSpeed=d/maxTime;
    //    cout<<"Case  ......"<<maxSpeed<<endl;
       cout<<"Case #"<<i<<": "<<fixed<<setprecision(6)<<maxSpeed<<"  "<<maxSpeed<<endl;
    }  
    return 0;  
}
