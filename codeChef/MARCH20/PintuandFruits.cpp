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
        int n, m;
        cin >> n >> m;
        int inData[n];
        int sData[m+1][2];
        int inPricedata[n];
        for (int j = 0; j < n; j++)
        {
            cin >> inData[j];
        }
        for (int j = 0; j <= m; j++)
        {
            sData[j][1] = 0;
            sData[j][0] = 0;
        }
        for (int j = 0; j < n; j++)
        {
            cin >> inPricedata[j];
            sData[inData[j]][0] = 1;
            sData[inData[j]][1] += inPricedata[j];
        }

        set<int> s1; 
        for (int j = 0; j <= m; j++)
        {
            if(sData[j][0] ){
                s1.insert(sData[j][1]);
            }
        }
        cout<<*(s1.begin())<<endl;
    }
    return 0;
}
