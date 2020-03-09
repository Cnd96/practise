#include "bits/stdc++.h"
#include <iostream>
#include <vector>
#include <string>
using namespace std;
vector<int> resultData;
vector<int> matchData[20 * 20];
int resultLength;
bool found;
void getResult(vector<int> vect)
{
    for (auto it = vect.begin();
         it != vect.end(); it++)
    {
        auto a = find(resultData.begin(), resultData.end(), *it);
        if (a == resultData.end())
        {
            resultData.push_back(*it);
            if (resultLength == resultData.size())
            {
                found = true;
                break;
            }
            else
            {
                getResult(matchData[*it]);
            }
        }
    }
    if (found)
    {
        return;
    }
    resultData.pop_back();
}
int main()
{

    // for(int i=0;i<4;i++){
    //     cout<<vec[i];
    // }
    int t;
    cin >> t;
    for (int i = 1; i <= t; i++)
    {
        int r, c;
        cin >> r >> c;
        int cordinates[r * c][2];
        for (int j = 0; j < 400; j++)
        {
            matchData[j].clear();
        }
        resultData.clear();
        resultLength = r * c;
        found = false;
        for (int j = 1; j <= r; j++)
        {
            for (int k = 1; k <= c; k++)
            {
                cordinates[((j - 1) * c) + k - 1][0] = j;
                cordinates[((j - 1) * c) + k - 1][1] = k;
            }
        }
        for (int j = 0; j < r * c; j++)
        {
            for (int k = j + 1; k < r * c; k++)
            {
                if (cordinates[j][0] != cordinates[k][0] &&
                    cordinates[j][1] != cordinates[k][1] &&
                    ((cordinates[j][0] + cordinates[j][1]) != (cordinates[k][0] + cordinates[k][1])) &&
                    ((cordinates[j][0] - cordinates[j][1]) != (cordinates[k][0] - cordinates[k][1])))
                {
                    matchData[j].push_back(k);
                    matchData[k].push_back(j);
                }
            }
        }

        if (matchData[0].size() == 0)
        {
            cout << "Case #" << t << ": IMPOSSIBLE"<<endl;
        }
        else
        {
            resultData.push_back(26);
            getResult(matchData[26]);
            if (found)
            {
               cout << "Case #" << t << ": POSSIBLE"<<endl;
                // for (int j = 0; j < r * c; j++){
                //     cout<<cordinates[j][0]<<" "<<cordinates[j][1]<<endl;
                // }
            }
            else
            {
                cout << "Case #" << t << ": IMPOSSIBLE"<<endl;
            }
        }

        // for (int j = 0; j < r * c; j++)
        // {
        //     cout << "Elements at index "
        //          << j << ": ";

        //     // Displaying element at each column,
        //     // begin() is the starting iterator,
        //     // end() is the ending iterator
        //     for (auto it = matchData[j].begin();
        //          it != matchData[j].end(); it++)
        //     {

        //         // (*it) is used to get the
        //         // value at iterator is
        //         // pointing
        //         cout << *it << ' ';
        //     }
        //     cout << endl;
        // }
    }
    return 0;
}
