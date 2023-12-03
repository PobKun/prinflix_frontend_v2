import Swal from "sweetalert2";

export default async function alertPopup(icon: string, message: string | null) {
     try {  
        Swal.close()
        switch (icon) {
              case 'success': 
              case 'info': 
              case 'error': 
              case 'warning':                
               return Swal.fire({
                  icon: icon,
                  title: icon,
                  html: message as string ?? '-',
                  confirmButtonColor: "rgb(24, 43, 72)",
                })
              case 'loading':
                return Swal.fire({
                  title: icon,
                  html: message as string ?? '-',
                  allowEscapeKey: false,
                  allowOutsideClick: false,
                  didOpen: () => {
                    Swal.showLoading()
                  }
                });
              case 'close': 
                return true
              default:
                return Swal.fire(`${message as string}`)
          }
      } catch (e) {
        console.log('[ERR][alertPopup] >',e);
        return false
      }
  };
  