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
        int n,p;
        cin >> n >> p;
        int length=n*p;
        int locationData[length][2];
        int officeAvailability[length];
        int minTime[length];

        for (int i = 0; i < n; i++)
        {
            for(int j=0;j<p;j++){
                locationData[(i*p)+j][0]=i;
                locationData[(i*p)+j][1]=j;
            }
        }
        cout<<"Case #"<<i<<": "<<endl;

    }    
}
