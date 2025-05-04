terraform {
  required_providers {
    virtualbox = {
      source  = "local/virtualbox"
      version = "0.2.2-alpha.1"
    }
  }
}

provider "virtualbox" {}

resource "virtualbox_vm" "my_vm" {
  name   = "stage2-vm"
  image = "/home/lifede/Downloads/ubuntu-20.04.vdi" 
  memory = 2048
  cpus   = 2

  network_adapter {
    type = "nat"
  }
}

output "vm_ip" {
  value = virtualbox_vm.my_vm.ipv4_address
}
