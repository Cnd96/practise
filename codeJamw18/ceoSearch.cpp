#include "bits/stdc++.h"
#include <iostream> 
#include <vector> 
#include <string> 
using namespace std;

bool sortcol( const vector<long long>& v1, 
               const vector<long long>& v2 ) { 
 return v1[1] < v2[1]; 
} 

int main()
{
    int t;
    cin>>t;
    for (int i = 1; i <=t; i++)
    {
       long long k,n,e;
       cin>>k;
       vector<vector<long long>> data(k); 
       for (int j = 0; j <k; j++)
       {
         data[j] = vector<long long>(3); 
         cin>>n>>e;
         data[j][0]=n;
         data[j][1]=e;
         data[j][2]=n*e;
       }
       sort(data.begin(), data.end(),sortcol); 
       long long currentPeople=data[0][0];
       for (int j = 1; j <k; j++)
       {
           if(currentPeople<data[j][2]){
               currentPeople=0;
           }
           else
           {
               currentPeople-=data[j][2];
           }
           currentPeople+=data[j][0];
       }
       long long maxExperience=data[k-1][1];
       if(currentPeople>maxExperience){
            cout<<"Case #"<<i<<": "<<currentPeople<<endl;
       }
       else
       { 
           cout<<"Case #"<<i<<": "<<(maxExperience+1)<<endl;
       }
    }  
    return 0;  
}
