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
        int n,p;
        cin >> n >> p;
        int dataArr[n];
        int dataSummArr[n+1];
        for (int i = 0; i < n; i++)
        {
            cin>>dataArr[i];
        }
        sort(dataArr,dataArr+n,greater<int>());
        dataSummArr[0]=0;
        for (int i = 0; i <n; i++)
        {
            dataSummArr[i+1]=dataSummArr[i] + dataArr[i];
        }
        int totalHours=INT_MAX;
        cout<<totalHours;
        for (int i=(p); i <=n; i++)
        {
             int setSum=dataSummArr[i]-dataSummArr[i-p];
             int tempTotalHours=p*dataArr[i-p]-setSum;
             if(totalHours>tempTotalHours){
                 totalHours=tempTotalHours;
             }
             if(totalHours==0){
                 break;
             }
        }
        cout<<"Case #"<<i<<": "<<totalHours<<endl;

    }
    
    
}