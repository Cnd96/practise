#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;
#define lim 12
int main()
{

    vector<int> odata[lim];
    for (int i = 1; i < lim; i++)
    {
        int div = 1;
        int inc = 1;
        while (true)
        {
            div = i * inc;
            if (div > lim)
            {
                break;
            }
            else
            {
                odata[i].push_back(div);
                inc++;
            }
        }
    }
    // for (int i = 1; i < lim; i++)
    // {
    //     cout << i << " :";
    //     for (int j=0;j<odata[i].size();j++)
    //     {
    //         cout << odata[i][j] << ",";
    //     }
    //     cout<<endl;
    // }

    int t;
    cin >> t;
    for (int i = 1; i <= t; i++)
    {
        int n, m, q, tornPage;
        vector<int> goodPageNmubers;
        int currentPage = 1;
        cin >> n >> m >> q;
        for (int j = 0; j < m; j++)
        {
            cin >> tornPage;
            while (currentPage < tornPage)
            {
                goodPageNmubers.push_back(currentPage);
                currentPage++;
                /* code */
            }
            currentPage++;
        }
        while (currentPage <= n)
        {
            goodPageNmubers.push_back(currentPage);
            currentPage++;
            /* code */
        }
        if(goodPageNmubers.size()==0){}
        for (auto j = goodPageNmubers.cbegin(); j != goodPageNmubers.cend(); ++j)
        {
            cout << *j << " ";
        }
    }
    return 0;
}
