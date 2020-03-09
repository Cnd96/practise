#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;
int main()
{
    int qq=50000;
    int qw=50000;
    // int aa[(qq*qw)+1];

    int t;
    cin >> t;
    for (int i = 1; i <= t; i++)
    {
        int n, r, c, sr, sc;
        cin >> n >> r >> c >> sr >> sc;
        int cordinates[(r * c)+1]={0};
        char ch;
        int currentCordinate=((sr - 1) * c) + sc;
        cordinates[currentCordinate] =1;

        for (int j = 0; j <n; j++)
        {
            cin>>ch;
            if(ch=='E'){
                currentCordinate+=1;
                while (cordinates[currentCordinate])
                {
                    currentCordinate+=1;
                }
                cordinates[currentCordinate]=1;
            }
            else if (ch=='W')
            {
                currentCordinate-=1;
                while (cordinates[currentCordinate])
                {
                    currentCordinate-=1;
                }
                cordinates[currentCordinate]=1;
            }
            else if (ch=='N')
            {
                currentCordinate-=c;
                while (cordinates[currentCordinate])
                {
                    currentCordinate-=c;
                }
                cordinates[currentCordinate]=1;
            }
            else
            {
                  currentCordinate+=c;
                while (cordinates[currentCordinate])
                {
                    currentCordinate+=c;
                }
                cordinates[currentCordinate]=1;
            }
        }
        if(currentCordinate%c==0){
           cout<<"Case #"<<i<<": "<<(currentCordinate/c)<<" "<<c<<endl;
        }
        else
        {
            cout<<"Case #"<<i<<": "<<((currentCordinate/c)+1)<<" "<<(currentCordinate%c)<<endl;
        }
        
        
    }
    return 0;
}
