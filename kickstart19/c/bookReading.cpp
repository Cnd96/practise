#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;
#define lim 100001

int main()
{
    int xx=0;
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

    int t;
    cin >> t;
    for (int i = 1; i <= t; i++)
    {
        int n, m, q, tornPage, noPages;
        int totalPages = 0;
        int goodP = 0;
        vector<int> goodPageNmubers;
        bool pageData[lim] = {0};
        int currentPage = 1;
        cin >> n >> m >> q;
        int qArr[q];
        for (int j = 0; j < m; j++)
        {
            cin >> tornPage;
            while (currentPage < tornPage)
            {
                pageData[currentPage] = 1;
                currentPage++;
                goodP++;
            }
            currentPage++;
        }
        while (currentPage <= n)
        {
            pageData[currentPage] = 1;
            currentPage++;
            goodP++;
        }
        for (int j = 0; j < q; j++)
        {
            cin >> qArr[j];
        }
        if (goodP != 0)
        {
           
            for (int j = 0; j < q; j++)
            {
                for (int k = 0; k < odata[qArr[j]].size(); k++)
                {
                    totalPages += pageData[odata[qArr[j]][k]];
                    xx++;
                    if(odata[qArr[j]][k]>n){
                        break;
                    }
                }
            }
        }
        cout << "Case #" << i << ": " << totalPages <<endl;
    }
    cout<<"xx :"<<xx;
    return 0;
}

