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
        int o=0;
        cin >> n >> p;
        int length=n*p;
        int locationData[length][2];
        int officeAvailability[length];
        int minTime[length];
        vector<int> availablePoints;
        vector<int> unavailablePoints;
        for (int i = 0; i < n; i++)
        {
            for(int j=0;j<p;j++){
                locationData[(i*p)+j][0]=i;
                locationData[(i*p)+j][1]=j;
            }
        }
        for (int i = 0; i < n; i++)
        {
           
            string s;
            cin>>s;
            // cout<<s<<endl;
            for(int j=0;j<p;j++){ 
                officeAvailability[(i*p)+j]=(int (s[j]))-48;
                if((int (s[j]))-48){
                    availablePoints.push_back((i*p)+j);
                }
                else
                {
                    unavailablePoints.push_back((i*p)+j);
                }
                
                // cout<<s[j]<<endl;
            }
        }
        // for (auto i = availablePoints.cbegin(); i != availablePoints.cend(); ++i) 
        // cout << *i << " "; 
        for (int i = 0; i <length; i++)
        { 
            int minimumTime=INT_MAX;
            if(officeAvailability[i]==1){
                minTime[i]=0;
            }
            else
            {
                // for(int j=0;j<length;j++){
                //     o++;
                //     if(officeAvailability[j]==1){
                //         int totalTime=abs(locationData[i][0]-locationData[j][0])+abs(locationData[i][1]-locationData[j][1]);
                //         if(minimumTime>totalTime){
                //             minimumTime=totalTime;
                //         }
                //     }
                // }
                for (auto j = availablePoints.cbegin(); j != availablePoints.cend(); ++j){
                        int totalTime=abs(locationData[i][0]-locationData[*j][0])+abs(locationData[i][1]-locationData[*j][1]);
                        if(minimumTime>totalTime){
                            minimumTime=totalTime;
                        }
                        o++;
                }
                 minTime[i]=minimumTime;
            }   
        }
        int minMaxTime=*max_element(minTime, minTime + length);
     int oo=0;
       for (auto i = unavailablePoints.cbegin(); i != unavailablePoints.cend(); ++i)
        { 
            // if(officeAvailability[i]==0){
                int maximumForTheNewLoc=0;
                for (auto j = unavailablePoints.cbegin(); j != unavailablePoints.cend(); ++j){
                       int totalTime=abs(locationData[*i][0]-locationData[*j][0])+abs(locationData[*i][1]-locationData[*j][1]);
                        totalTime=min(minTime[*j], totalTime);
                        if(maximumForTheNewLoc<totalTime){
                            maximumForTheNewLoc=totalTime;
                        }
                        oo++;
                }
                // for(int j=0;j<length;j++){
                //     oo++;
                //      if(officeAvailability[j]==0&&minTime[j]>maximumForTheNewLoc){
                         
                //         int totalTime=abs(locationData[i][0]-locationData[j][0])+abs(locationData[i][1]-locationData[j][1]);
                //         totalTime=min(minTime[j], totalTime);
                //         if(maximumForTheNewLoc<totalTime){
                //             maximumForTheNewLoc=totalTime;
                //         }
                //      }
                // }
                if(minMaxTime>maximumForTheNewLoc){
                    minMaxTime=maximumForTheNewLoc;
                }
            // }
        }
        // cout<<"Case #"<<i<<": "<<minMaxTime<<endl;
        cout<<"Case #"<<i<<" "<<o<<" "<<oo<<": "<<minMaxTime<<endl;

    }    
}


// 0000000000
// 0000000000
// 0000000000
// 0000000000
// 0000000000
// 0000000000
// 0000000000
// 0000000000
// 0000000000
// 1000000001