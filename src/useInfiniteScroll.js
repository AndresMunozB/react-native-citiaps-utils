import { useState, useEffect } from 'react'

export default useInfiniteScroll = (axios, pageSize, resource, initParams) => {
    const [data, setData] = useState([])
    const [loadingData, setLoadingData] = useState(false)
    const [loadingMore, setLoadingMore] = useState(false)
    const [totalCount, setTotalCount] = useState(0)
    const [page, setPage] = useState(0)
    const [currentParams, setParams] = useState(initParams)
    const [errorData, setErrorData] = useState('')

    const fecthData = async (newPag) => {
        try {
            let params = { ...currentParams, page: newPag, pageSize }
            let response = await axios.get(resource, { params })
            setTotalCount(parseInt(response.headers["pages"]))//total de paginas/
            setErrorData('')
            return response.data.response
        } catch (error) {
            let message;
            if (error.response && error.response.data) { //error de autenticación
                message = error.response.data.error
            } else {
                message = 'Problemas con el servidor, pruebe mas tarde'
            }
            setErrorData(message)
            return []
        }
    }

    const loadMore = async () => {
        //console.log("nueva pag", page, 'total', totalCount, 'load', loadingMore)
        let newPag = page + 1
        if (newPag > 0 && !loadingMore) {//&& totalCount > data.length
            setLoadingMore(true)
            setPage(newPag)
            let newData = await fecthData(newPag)
            setData(data.concat(newData))
            setLoadingMore(false)
        }
    }

    const onRefresh = async (loader = false) => {
        setPage(0)
        setLoadingMore(false)
        loader && (setLoadingData(true))
        let newData = await fecthData(0)
        setData(newData)
        loader && (setLoadingData(false))
    }

    useEffect(() => {
        setLoadingData(true)
        const asyncFetch = async () => {
            await onRefresh()
            setLoadingData(false)
        }
        asyncFetch()
    }, [currentParams])

    return [data, loadingData, loadingMore, errorData, loadMore, onRefresh, setParams]
}