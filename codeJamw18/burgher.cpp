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
        int k;
        cin>>k;
        int od[k];
        vector<int> d;
        if(k%2==0){
            for(int q=0;q<=(k/2)-1;q++){
                d.push_back(q);
                d.push_back(q);
            }
        }
        else
        {
            for(int q=0;q<(k-1)/2;q++){
                d.push_back(q);
                d.push_back(q);
            }
             d.push_back((k-1)/2);
        }
        
        for(int j=0;j<k;j++){
            cin>>od[j];
        }
        sort(od, od+k, greater<int>()); 
        sort(d.begin(), d.end(), greater<int>());
        int maxError=0;
        for(int j=0;j<k;j++){
            maxError+=(od[j]-d[j])*(od[j]-d[j]);
            // cout<<od[j]<<" "<<d[j]<<endl;
        }
       cout<<"Case #"<<i<<": "<<maxError<<endl;
    }  
    return 0;  
}
