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
        int n, l;
        cin >> n >> l;
        vector<string> words;
        vector<char> letterData[l];
        for (int j = 0; j < n; j++)
        {
            string word;
            cin >> word;
            words.push_back(word);
            for (int k = 0; k < l; k++)
            {
                if (find(letterData[k].begin(), letterData[k].end(), word[k]) == letterData[k].end())
                {
                    letterData[k].push_back(word[k]);
                }
            }
        }
        int totalWordsU[l];
        int letterSizeData[l];
        totalWordsU[l - 1] = letterData[l - 1].size();
        letterSizeData[l - 1] = letterData[l - 1].size();
        for (int k = l - 2; k >= 0; k--)
        {
            letterSizeData[k] = letterData[k].size();
            totalWordsU[k] = letterData[k].size() * totalWordsU[k + 1];
        }
        if (totalWordsU[0] == n)
        {
            cout << "Case #" << i << ": -" << endl;
        }
        else
        {
            int temp[l] = {0};
            while (true)
            {
                string s = "";
                for (int k = 0; k < l; k++)
                {
                    s.push_back(letterData[k][temp[k]]);
                }
                if (find(words.begin(), words.end(), s) == words.end())
                {
                    cout << "Case #" << i << ": " << s << endl;
                    break;
                }
                else
                {
                    for (int k = l - 1; k >= 0; k--)
                    {
                        if((temp[k]+1)==letterData[k].size()){
                            temp[k]=0;
                        }
                        else
                        {
                            temp[k]++;
                            break;
                        }
                    }
                }
            }
        }
    }
    return 0;
}
