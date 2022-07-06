
import {gql,useQuery} from "@apollo/client"
import ClientRow from "./ClientRow"
//gql are use to make query and useQuery is used to load data 

const GET_CLIENTS=gql`
  query getCLients{
      clients{
          id,
          name,
          email,
          phone
      }
  }
`
// const GET_PROJECTS=gql`
//       query getProjects{
//           projects{
//               id,
//               name,
//               description,
              
//           }
//       }
//   `

function Client(){
     const {loading,error,data}=useQuery(GET_CLIENTS)
     if(loading) return <p>Loading...</p>;
     if(error) return <p>Error...</p>
      
     return(
         <>
          {
              !loading && !error ?
               <table className="table table-hover mt-5">
                  <thead>
                      <tr>
                          <th>Name</th>
                          <th>Email</th>
                          <th>Phone</th>
                          <th></th>
                       </tr>
                  </thead>
                  <tbody>
                      {data?data.clients.map(client=>{
                          return <ClientRow key={client.id} client={client} />
                          
                      }):""}
                  </tbody>
               </table>
              :""
          }
          </>
     )    
}

export default Client