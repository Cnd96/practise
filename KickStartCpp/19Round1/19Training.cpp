#include "bits/stdc++.h"
#include <iostream> 
#include <vector> 
using namespace std;
bool getEqualSkills(int arr[],int numberOfPlayers,int numberOfMatchPlayers){
    bool found=false;
    int matchingNo=1;
    for (int i = 0; i <numberOfPlayers-1; i++){
        if(arr[i]==arr[i+1]){
            matchingNo++;
            if(matchingNo==numberOfMatchPlayers){
                found=true;
                break;
            }
        }
        else
        {
            matchingNo=1;
        } 
    }
    return found;
}

int main()
{
    int t;
    cin>>t;

    for (int i = 1; i <=t; i++)
    {
        int n,p;
        cin >> n >> p;
        int dataArr[n];
        for (int i = 0; i < n; i++)
        {
            cin>>dataArr[i];
        }
        sort(dataArr,dataArr+n,greater<int>());
        int totalHours=INT_MAX;
        bool matchingOrNot=getEqualSkills(dataArr,n,p);
        if(matchingOrNot){
           totalHours=0; 
        }
        else
        {
            for (int i = 0; i < (n-p+1); i++)
            {
                int max=dataArr[i];
                int currentSetHours=0;
                for(int j=1;j<p;j++){
                    currentSetHours+=(max-dataArr[i+j]);
                    if(currentSetHours>totalHours){
                        break;
                    }
                }
                if(currentSetHours<totalHours){
                    totalHours=currentSetHours;
                } 
                if(currentSetHours==0){
                    break;
                }
            }
        }
        cout<<"Case #"<<i<<": "<<totalHours<<endl;

    }
    
    
}