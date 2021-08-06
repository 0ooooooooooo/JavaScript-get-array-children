// 给定一个整数数组 nums ，数组中的元素 互不相同 。返回该数组所有可能的子集（幂集）。

// 解集 不能 包含重复的子集。你可以按 任意顺序 返回解集。

// 示例 1：

// 输入：nums = [1,2,3]
// 输出：[[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
// 示例 2：

// 输入：nums = [0]
// 输出：[[],[0]]

/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function(nums) {
	let list = [[]];
	for(let i = 0; i < nums.length; i++){
		let length = list.length;
		for (let j = 0; j < length; j++) {
			let cur = JSON.parse(JSON.stringify(list[j]));
			cur.push(nums[i]);
			list.push(cur);
		}
	}
	return list;
};