

export  function set_redirect_url(data: string) {

  sessionStorage.setItem("redirect_url", data);

}

export function get_redirect_url(): string | null {
    return sessionStorage.getItem("redirect_url");
  }
  
