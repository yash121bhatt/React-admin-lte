import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { NavLink } from 'react-router-dom'

const Country = () => {
  
  const [data , setData] = useState([])
  const [page , setPage] = useState({
    currentPage : 1,
    perPage : 10,
    totalCount : '',
    totalPages : '',
  })

  const getCountry = async (pageNumber,perPage)=>{
    try {
      const res = await axios.get(`https://api-rk-geographical.onrender.com/api/countries?page=${pageNumber}&limit=${perPage}`)
      console.log(res.data);
      setData(res.data.data);
      setPage({
        ...page,
        totalCount : res.data.totalCount,
        totalPages : Math.ceil(res.data.totalCount / perPage),
      })
      
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
   getCountry(page.currentPage,page.perPage)
  },[page.currentPage,page.perPage])

  const handlePageChange = (pageNumber) => {
    setPage({
      ...page,
      currentPage : pageNumber
    })
  }

  return (
    <>
      <div className="content-wrapper">
        <section className="content-header">
          <div className="container-fluid">
            <div className="row mb-2">
              <div className="col-sm-6">
                <h1>DataTables</h1>
              </div>
              <div className="col-sm-6">
                <ol className="breadcrumb float-sm-right">
                  <li className="breadcrumb-item">
                    <a href="#">Home</a>
                  </li>
                  <li className="breadcrumb-item active">DataTables</li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <h3 className="card-title">
                      DataTable with minimal features & hover style
                    </h3>
                  </div>

                  <div className="card-body">
                    <table
                      id="example2"
                      className="table table-bordered table-hover"
                    >
                      <thead>
                        <tr>
                          <th>ID</th>
                          <th>Country Name</th>
                          <th>Country Capital</th>
                          <th>Country Code</th>
                          <th>Nationality</th>
                          <th>Currency Name</th>
                          <th>Currency Symbol</th>
                        </tr>
                      </thead>
                      <tbody>
                        {data.map((item)=>(
                          <tr key={item.id}>
                          <td>{item.id}</td>
                          <td>{item.name}</td>
                          <td>{item.capital}</td>
                          <td>{item.iso2}</td>
                          <td>{item.nationality}</td>
                          <td>{item.currency_name}</td>
                          <td>{item.currency_symbol}</td>

                        </tr>
                        ))}
                      </tbody>
                    
                    </table>
                  </div>
                  <div className="card-footer">
                    <nav aria-label="Page navigation example">
                      <ul className="pagination">
                        {[...Array(page.totalPages).keys()].map((x)=>(
                          <li className="page-item" key={x}>
                            <NavLink className="page-link" onClick={()=>handlePageChange(x+1)}>
                              {x+1}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                    </nav>
                  </div>
                </div>

                
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Country
