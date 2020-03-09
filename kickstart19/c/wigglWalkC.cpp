#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;
int main()
{
    int t;
    cin >> t;
    for (int i = 1; i <= t; i++)
    {
        int n, r, c, sr, sc;
        cin >> n >> r >> c >> sr >> sc;
        vector<int> visitedCo;
        char ch;
        int currentCordinate=((sr - 1) * c) + sc;
        visitedCo.push_back(currentCordinate);

        for (int j = 0; j <n; j++)
        {
            cin>>ch;
            if(ch=='E'){
                currentCordinate+=1;
                while (binary_search(visitedCo.begin(), visitedCo.end(), currentCordinate))
                {
                    currentCordinate+=1;
                }
                visitedCo.push_back(currentCordinate);
            }
            else if (ch=='W')
            {
                currentCordinate-=1;
                while (binary_search(visitedCo.begin(), visitedCo.end(), currentCordinate))
                {
                    currentCordinate-=1;
                }
                visitedCo.push_back(currentCordinate);
            }
            else if (ch=='N')
            {
                currentCordinate-=c;
                while (binary_search(visitedCo.begin(), visitedCo.end(), currentCordinate))
                {
                    currentCordinate-=c;
                }
                visitedCo.push_back(currentCordinate);
            }
            else
            {
                  currentCordinate+=c;
                while (binary_search(visitedCo.begin(), visitedCo.end(), currentCordinate))
                {
                    currentCordinate+=c;
                }
               visitedCo.push_back(currentCordinate);
            }
            sort(visitedCo.begin(),visitedCo.end());
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
