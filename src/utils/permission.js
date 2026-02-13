import SystemEnum from "@/enum/SystemEnum"
import tools from '@/utils/tools';

export function permission(data) {
	let permissions = tools.data.get(SystemEnum.PERMISSIONS_KEY);
	if(!permissions){
		return false;
	}
	let isHave = permissions.includes(data);
	return isHave;
}

export function rolePermission(data) {
	let userInfo = tools.data.get(SystemEnum.USER_INFO_KEY);
	if(!userInfo){
		return false;
	}
	let role = userInfo.role;
	if(!role){
		return false;
	}
	let isHave = role.includes(data);
	return isHave;
}
