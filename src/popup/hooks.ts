import { useEffect, useState } from 'react';

function usePageInfo() {
    const [pageInfo, setPageInfo] = useState<{
        title: string;
        [prop: string]: any;
    }>({ title: '' });

    useEffect(() => {
        chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs: any[]) {
                console.log(tabs);
                setPageInfo(tabs[0]);
            },
        );
    }, []);

    return {
        pageInfo,
    };
}

export { usePageInfo };
