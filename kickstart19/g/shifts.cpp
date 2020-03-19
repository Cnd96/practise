#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;

vector<vector<int>> annadata;
vector<vector<int>> boondata;
vector<vector<int>> annaElidata;
vector<vector<int>> boonElidata;
vector<long long> sumDataAnna;
vector<long long> sumDataBoon;
int main()
{
    cout<<(1<<3)<<endl;
    int t;
    cin >> t;
    for (int i = 1; i <= t; i++)
    {
        annadata.clear();
        boondata.clear();
        annaElidata.clear();
        boonElidata.clear();
        sumDataAnna.clear();
        sumDataBoon.clear();

        int n, tempSize;
        long long num, h;
        cin >> n >> h;
        for (int j = 0; j < n; j++)
        {
            cin >> num;
            tempSize = sumDataAnna.size();
            for (int k = 0; k < tempSize; k++)
            {
                sumDataAnna.push_back((num + sumDataAnna[k]));
                vector<int> temp;
                temp = annadata[k];
                temp.push_back(j);
                annadata.push_back(temp);
                if (num + sumDataAnna[k] >= h)
                {
                    annaElidata.push_back(temp);
                }
            }
            sumDataAnna.push_back(num);
            vector<int> temp;
            temp.push_back(j);
            annadata.push_back(temp);
            if (num >= h)
            {
                annaElidata.push_back(temp);
            }
        }

        for (int j = 0; j < n; j++)
        {
            cin >> num;
            tempSize = sumDataBoon.size();
            for (int k = 0; k < tempSize; k++)
            {
                sumDataBoon.push_back((num + sumDataBoon[k]));
                vector<int> temp;
                temp = boondata[k];
                temp.push_back(j);
                boondata.push_back(temp);
                if (num + sumDataBoon[k] >= h)
                {
                    boonElidata.push_back(temp);
                }
            }
            sumDataBoon.push_back(num);
            vector<int> temp;
            temp.push_back(j);
            boondata.push_back(temp);
            if (num >= h)
            {
                boonElidata.push_back(temp);
            }
        }
        int totalComb = 0;
        cout<<(annaElidata.size()*boonElidata.size())<<endl;
        // if ((annaElidata.size() == 0) || (boonElidata.size() == 0))
        // {
        //     cout << "Case #" << i << ": " << totalComb << endl;
        // }
        // else
        // {
        //     for (int j = 0; j < annaElidata.size(); j++)
        //     {
        //         set<int> ss;
        //         ss.insert(annaElidata[j].begin(), annaElidata[j].end());
        //         for (int k = 0; k < boonElidata.size(); k++)
        //         {
        //             set<int> s2;
        //             s2 = ss;
        //             s2.insert(boonElidata[k].begin(), boonElidata[k].end());
        //             if(n==s2.size()){
        //                 totalComb++;
        //             }
        //         }
        //     }
        //      cout << "Case #" << i << ": " << totalComb << endl;
        // }
     }
    return 0;
}

// 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1 1
// 2 2 2 2 2 2 2 2 2 2 2 2
// 1 1 1 1 1 1 1 2 2 2 2 2

// 3
// 2 3
// 1 2
// 3 3
// 2 5
// 2 2
// 10 30
// 3 5
// 2 2 3
// 2 2 3
