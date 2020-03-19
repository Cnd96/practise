#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;

int main()
{
    int aa[15][2] = {{7, 7}, {8, 6}, {3, 1}, {1, 3}, {6, 8}, {5, 7}, {8, 4}, {5, 1}, {1, 5}, {4, 8}, {3, 7}, {8, 2}, {7, 1}, {1, 7}, {2, 8}};
    int t;
    cin >> t;
    for (int i = 1; i <= t; i++)
    {
        int r, c;
        vector<int> rNo;
        vector<int> cNo;
        cin >> r >> c;

        if ((r == 1) && (c == 1))
        {
            rNo.push_back(8);
            cNo.push_back(8);
        }
        else if (r == c)
        {
            rNo.push_back(1);
            cNo.push_back(1);
            rNo.push_back(8);
            cNo.push_back(8);
        }
        else if (r > c)
        {

            while (r != c)
            {
                r--;
                c++;
            }
            rNo.push_back(r);
            cNo.push_back(c);
            rNo.push_back(1);
            cNo.push_back(1);
            rNo.push_back(8);
            cNo.push_back(8);
        }
        else
        {
            while (r != c)
            {
                r++;
                c--;
            }
            rNo.push_back(r);
            cNo.push_back(c);
            rNo.push_back(1);
            cNo.push_back(1);
            rNo.push_back(8);
            cNo.push_back(8);
        }
        cout << 15 + rNo.size()<<endl;
        for (int j = 0; j < rNo.size(); j++)
        {
            cout << rNo[j] << " " << cNo[j] << endl;
        }
        for (int j = 0; j < 15; j++)
        {
            cout << aa[j][0] << " " << aa[j][1] << endl;
        }
    }
    return 0;
}
