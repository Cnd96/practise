#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;

bool sortcol(const vector<long long> &v1,
             const vector<long long> &v2)
{
    return v1[1] <v2[1];
}
int main()
{
    vector<vector<long long>> pdata;
    for (int j = 0; j < 5; j++)
    {
        vector<long long> v1;
        v1.push_back(j);
        v1.push_back(2);
        pdata.push_back(v1);
    }
    pdata[0][1]++;
    pdata[1][1]+=2;
    sort(pdata.begin(), pdata.end(), sortcol);

    for (int j = 0; j < 5; j++)
    {
        for (int i = 0; i < pdata[j].size(); i++)
        {
            cout<<pdata[j][i]<<" ";
            /* code */
        }
        cout<<endl;
        
    }
}
