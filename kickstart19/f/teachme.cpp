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
        vector<int> skill2[1005];
        int n, s, c, no;
        cin >> n >> s;
        vector<int> peopleData[n];
        vector<int> masterSet;
        for (int j = 0; j < n; j++)
        {
            masterSet.push_back(1);
        }
        for (int j = 0; j < 1005; j++)
        {
            skill2[j] = masterSet;
        }
        for (int j = 0; j < n; j++)
        {
            cin >> no;
            for (int k = 0; k < no; k++)
            {
                cin >> c;
                skill2[c][j] = 0;
                peopleData[j].push_back(c);
            }
        }
        int resultData = 0;
        for (int j = 0; j < n; j++)
        {
            set<int> s2;
            for (int k = 0; k < peopleData[j].size(); k++)
            {
                for (int l = 0; l < skill2[peopleData[j][k]].size(); l++)
                {
                    if(skill2[peopleData[j][k]][l]){
                     s2.insert(l);
                    }
                    if(s2.size()==(n-1)){
                        break;
                    }
                }
            }
            resultData += s2.size();
        }
        cout<<"Case #"<<i<<": "<<resultData<<endl;
    }
    return 0;
}

// 3
// 4 100
// 4 80 90 100 5
// 1 90
// 1 80
// 3 80 90 100
// 3 30
// 4 10 11 12 13
// 4 10 11 12 13
// 5 25 26 27 28 29
// 4 100
// 2 1 2
// 2 3 4
// 4 1 2 3 4
// 1 1